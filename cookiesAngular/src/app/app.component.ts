import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currency: string = '$';

  productsData: any[] = [
    {
      image: '1.png',
      title: 'Лучшие друзья',
      text: 'Печенье, с которого все началось! Наше фирменное печенье с шоколадной крошкой и грецкими орехами хрустящее снаружи с достаточно толстой и липкой серединкой.',
      price: 20,
      basePrice: 20,
      weight: '2 шт./ 200 гр.',
    },
    {
      image: '2.png',
      title: 'Шоколадный француз',
      text: 'Это печенье, изготовленное из тёмного французского какао и полусладкой шоколадной стружки, наверняка удовлетворит даже самого заядлого любителя шоколада.',
      price: 24,
      basePrice: 24,
      weight: '2 шт./ 200 гр.',
    },
    {
      image: '3.png',
      title: 'Овсянка с изюмом, Сэр!',
      text: 'Это сдобное маслянистое печенье весом шесть унций каждое, золотисто-коричневое снаружи, влажное внутри и наполненное пухлым сладким изюмом.',
      price: 18,
      basePrice: 18,
      weight: '2 шт./ 200 гр.',
    },
    {
      image: '4.png',
      title: 'Шоколадное наслаждение',
      text: 'Идеально хрустящее снаружи и достаточно густое и липкое в центре, это печенье наполнено полусладкой и тёмной шоколадной стружкой, придающей богатую глубину вкуса. ',
      price: 24,
      basePrice: 24,
      weight: '2 шт./ 200 гр.',
    },
    {
      image: '5.png',
      title: 'Арахисовый рай',
      text: 'Сладкое, пикантное и идеально сбалансированное печенье удовлетворяет тягу любителей арахисового масла и шоколада.',
      price: 20,
      basePrice: 20,
      weight: '2 шт./ 200 гр.',
    },
    {
      image: '6.png',
      title: ' Шоколадный ореховый деликатес ',
      text: 'Наша фирменная рецептура печенья с шоколадными крошками и грецкими орехами гарантирует незабываемый вкусовой опыт. Каждое печенье хрустит снаружи, но раскрывает внутри нежную сердцевину. ',
      price: 18,
      basePrice: 18,
      weight: '2 шт./ 200 гр.',
    },
    {
      image: '7.png',
      title: 'Ассорти фирменного печенья ',
      text: 'Зачем выбирать один, когда можно получить их все? Наш классический ассортимент печенья включает в себя по одному из четырёх оригинальных вкусов печенья.',
      price: 34,
      basePrice: 34,
      weight: '4 шт./ 400 гр.',
    },
    {
      image: '8.png',
      title: 'Лимонное печенье',
      text: 'Весна уже не за горами, но нам не терпелось подарить вам немного солнечного света: наше первое лимонное печенье. Это лакомство жевательное, лимонное, не слишком сладкое и даже немного… освежающее? ',
      price: 33,
      basePrice: 33,
      weight: '4 шт./ 400 гр.',
    },
    {
      image: '9.png',
      title: 'Любители шоколада',
      text: 'Вам больше не нужно выбирать фаворитов. Мы сделали этот набор для всех людей, которые действительно любят шоколад…',
      price: 38,
      basePrice: 38,
      weight: '4 шт./ 400 гр.',
    },
    {
      image: '10.png',
      title: 'Карамель и кокос',
      text: 'Побалуйте себя кокосовым, маслянистым, карамельным печеньем, которое обладает невиданным ранее вкусом и текстурой. Наслаждение круглый год. ',
      price: 33,
      basePrice: 33,
      weight: '4 шт./ 400 гр.',
    },
    {
      image: '11.png',
      title: 'Веганское с шоколадной крошкой ',
      text: 'Наше веганское безглютеновое печенье содержит кусочки хрустящих грецких орехов и полусладкую веганскую шоколадную стружку. ',
      price: 38,
      basePrice: 38,
      weight: '4 шт./ 400 гр.',
    },
    {
      image: '12.png',
      title: 'Веганское с шоколадной крошкой ',
      text: 'Наше веганское безглютеновое печенье содержит кусочки хрустящих грецких орехов и полусладкую веганскую шоколадную стружку. ',
      price: 35,
      basePrice: 35,
      weight: '4 шт./ 400 гр.',
    },
  ];

  form = this.fb.group({
    product: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });
  constructor(private fb: FormBuilder) {
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  changeCurrency() {
    let newCurrency = '$';
    let coefficient = 1;

    if (this.currency === '$') {
      newCurrency = '₽';
      coefficient = 88;
    } else if (this.currency === '₽') {
      newCurrency = 'sum';
      coefficient = 12600;
    } else if (this.currency === 'sum') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 1;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(1)
    });
    
  }

  confirOrder() {
    if (this.form.valid) {
      alert("thanks")
      this.form.reset()
    }
  }


}
