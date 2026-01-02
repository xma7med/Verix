import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { AbstractControl } from '@angular/forms';


export type ReserveProduct = {
  title: string;
  price: number;
  img: string;
   qty?: number; // اختياري لو هتبعته من برّه
};

@Component({
  selector: 'product-reserve-tab',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-reserve-tab.html',
  styleUrl: './product-reserve-tab.scss',
})
export class ProductReserveTab {

  sending = false;
  errorMsg = '';
  private fb = inject(FormBuilder);

  @Input({ required: true }) open = false;
  @Input() product?: ReserveProduct;

  @Output() closed = new EventEmitter<void>();

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    address: ['', [Validators.required, Validators.minLength(4)]],
     qty: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  close(): void {
    this.closed.emit();
  }

  // submit(): void {
  //   if (!this.product) return;

  //   if (this.form.invalid) {
  //     this.form.markAllAsTouched();
  //     return;
  //   }

  //   const payload = {
  //     product: this.product,
  //     ...this.form.value,
  //   };


  //   console.log(payload); // هنا هنحط EmailJS/Formspree
  //   this.close();
  // }

//   async submit(): Promise<void> {
//   if (!this.product) return;

//   if (this.form.invalid) {
//     this.form.markAllAsTouched();
//     return;
//   }

//   this.sending = true;
//   this.errorMsg = '';

//   const v = this.form.value;

//   const templateParams = {
//     full_name: v.fullName ?? '',
//     phone: v.phone ?? '',
//     address: v.address ?? '',
//     qty: String(v.qty ?? 1),
//     product_title: this.product.title,
//     product_price: `${this.product.price} EGP`,
//     // product_img: this.product.img,
//   };

//   try {
//     await emailjs.send(
//       'service_xxx',     // Service ID
//       'template_xxx',    // Template ID
//       templateParams,
//       'public_xxx'       // Public Key
//     );

//     this.form.reset();
//     this.close();
//   } catch (e) {
//     this.errorMsg = 'Failed to send. Try again.';
//   } finally {
//     this.sending = false;
//   }
// }


submit(): void {
  if (!this.product) return;

  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const v = this.form.value;

  const message = `
VÉRIX – New Reservation
-----------------------
Product: ${this.product.title}
Price: ${this.product.price} EGP
Quantity: ${v.qty}

Name: ${v.fullName}
Phone: ${v.phone}
Address: ${v.address}
  `.trim();

  const encoded = encodeURIComponent(message);

  window.open(
    `https://wa.me/201107585741?text=${encoded}`,
    '_blank'
  );

  this.close();
}





getCtrl(name: string): AbstractControl | null {
  return this.form.get(name);
}

isInvalid(name: string): boolean {
  const c = this.getCtrl(name);
  return !!c && c.invalid && (c.touched || c.dirty);
  
}

//-----------
get qtyCtrl(): AbstractControl {
  return this.form.get('qty')!;
}

get qtyValue(): number {
  return Number(this.qtyCtrl.value ?? 1);
}

incQty(): void {
  const v = this.qtyValue;
  if (v >= 5) {
    this.qtyCtrl.setValue(5);
    this.qtyCtrl.setErrors({ max: true });
    this.qtyCtrl.markAsTouched();
    return;
  }
  this.qtyCtrl.setValue(v + 1);
  this.qtyCtrl.markAsDirty();
  this.qtyCtrl.updateValueAndValidity();
}

decQty(): void {
  const v = this.qtyValue;
  if (v <= 1) {
    this.qtyCtrl.setValue(1);
    this.qtyCtrl.setErrors({ min: true });
    this.qtyCtrl.markAsTouched();
    return;
  }
  this.qtyCtrl.setValue(v - 1);
  this.qtyCtrl.markAsDirty();
  this.qtyCtrl.updateValueAndValidity();
}

onQtyInput(e: Event): void {
  const el = e.target as HTMLInputElement;
  let n = Number(el.value);

  if (!Number.isFinite(n)) n = 1;
  n = Math.floor(n);
  if (n < 1) n = 1;
  if (n > 5) n = 5;

  this.qtyCtrl.setValue(n, { emitEvent: true });
  this.qtyCtrl.markAsDirty();
  this.qtyCtrl.updateValueAndValidity();}

}
