// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'reserve-section',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './reserve.html',
//   styleUrl: './reserve.scss',
// })
// export class ReserveSection {
//   form = this.fb.group({
//     fullName: ['', [Validators.required, Validators.minLength(2)]],
//     phone: ['', [Validators.required, Validators.minLength(8)]],
//     size: ['50ml - 300 EGP', Validators.required],
//   });

//   constructor(private fb: FormBuilder) {}

//   waLink = 'https://wa.me/201000000000?text=I%20want%20to%20reserve%20V%C3%89RIX';
//   igLink = 'https://instagram.com/yourbrand';

//   submit(): void {
//     if (this.form.invalid) {
//       this.form.markAllAsTouched();
//       return;
//     }

//     const v = this.form.value;
//     const msg =
//       `Reserve VÉRIX%0A` +
//       `Name: ${encodeURIComponent(v.fullName ?? '')}%0A` +
//       `Phone: ${encodeURIComponent(v.phone ?? '')}%0A` +
//       `Size: ${encodeURIComponent(v.size ?? '')}`;

//     window.open(`https://wa.me/201000000000?text=${msg}`, '_blank');
//   }
// }















import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'reserve-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reserve.html',
  styleUrl: './reserve.scss',
})
export class ReserveSection {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    address: ['', [Validators.required, Validators.minLength(4)]],

    size: ['50ml - 479 EGP', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1) , Validators.max(5)]],

  });

  waLink = 'https://wa.me/201000000000?text=I%20want%20to%20reserve%20V%C3%89RIX';
  igLink = 'https://instagram.com/yourbrand';

  

  // submit(): void {
  //   if (this.form.invalid) {
  //     this.form.markAllAsTouched();
  //     return;
  //   }

  //   const v = this.form.value;
  //   const msg =
  //     `Reserve VÉRIX%0A` +
  //     `Name: ${encodeURIComponent(v.fullName ?? '')}%0A` +
  //     `Phone: ${encodeURIComponent(v.phone ?? '')}%0A` +
  //     `Adress: ${encodeURIComponent(v.address ?? '')}%0A` +
  //     `Size: ${encodeURIComponent(v.size ?? '')}`;

  //   window.open(`https://wa.me/201000000000?text=${msg}`, '_blank');
  // }


   get qtyCtrl() {
    return this.form.get('quantity')!;
  }

  get qtyValue(): number {
    const v = Number(this.qtyCtrl.value ?? 1);
    return Number.isFinite(v) ? v : 1;
  }

  private setQty(v: number): void {
    const clamped = Math.max(1, Math.min(5, Math.floor(v)));
    this.qtyCtrl.setValue(clamped);
    this.qtyCtrl.markAsDirty();
    this.qtyCtrl.updateValueAndValidity();
  }

  incQty(): void {
    this.setQty(this.qtyValue + 1);
  }

  decQty(): void {
    this.setQty(this.qtyValue - 1);
  }

  // أمان إضافي قبل الإرسال
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const vv = this.form.value;

    const q = Number(vv.quantity ?? 1);
    if (q < 1 || q > 5) {
      this.qtyCtrl.setErrors({ max: true });
      this.qtyCtrl.markAsTouched();
      return;
    }
  // submit(): void {
  // if (this.form.invalid) {
  //   this.form.markAllAsTouched();
  //   return;
  // }

  const v = this.form.value;

  const msg = `
VÉRIX – New Reservation
----------------------
Name: ${v.fullName}
Phone: ${v.phone}
Address: ${v.address}

Product: ${v.size}
Quantity: ${v.quantity}
`.trim();

  window.open(
    `https://wa.me/201107585741?text=${encodeURIComponent(msg)}`,
    '_blank'
  );
}



getCtrl(name: string): AbstractControl | null {
  return this.form.get(name);
}

isInvalid(name: string): boolean {
  const c = this.getCtrl(name);
  return !!c && c.invalid && (c.touched || c.dirty);
}

}






// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'reserve-section',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './reserve.html',
//   styleUrl: './reserve.scss',
// })
// export class ReserveSection {
//   form = this.fb.group({
//     fullName: ['', [Validators.required, Validators.minLength(2)]],
//     phone: ['', [Validators.required, Validators.minLength(8)]],
//     size: ['50ml - 300 EGP', Validators.required],
//   });

//   constructor(private fb: FormBuilder) {}
// }
