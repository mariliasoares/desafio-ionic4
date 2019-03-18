import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Cardume Coworking',
      'R. das Orquídeas, 159, Conj. Tiradentes - Aleixo',
      'Oferece e promove novas experiências no trabalho e relacionamentos',
      'https://d1y4va1nna2r1p.cloudfront.net/spaces/c855d4e3-f437-4487-8b8b-3b4f44fef250.jpeg',
      149.99,
      new Date('01-01-2019'),
      new Date('31-12-2019')
    ),
    new Place(
      'p2',
      'Impact Hub',
      'Av. Efigênio Salles, 1299 - Aleixo',
      'Espaço inspirador, conteúdo significativo, comunidade vibrante',
      'https://d1y4va1nna2r1p.cloudfront.net/spaces/1705e87e-4b87-4125-bcc3-fd4be5340fc6.png',
      109.99,
      new Date('01-01-2019'),
      new Date('31-12-2019')
    ),
    new Place(
      'p3',
      'Vila Hub',
      'Av. do Sol, 2 - Aleixo',
      'Serviços de escritório em um ambiente descontraído, inovador e econômico.',
      'https://d1y4va1nna2r1p.cloudfront.net/spaces/fa31636c-c04e-455e-b934-7d77dab977c9.jpeg',
      99.99,
      new Date('01-01-2019'),
      new Date('31-12-2019')
    ),
    new Place(
      'p4',
      'Manaus Offices',
      'Av. Djalma Batista, 1729 - Nossa Sra. das Graças',
      'Para quem procura modernidade, segurança e excelente localização, no coração financeiro de Manaus.',
      'https://d1y4va1nna2r1p.cloudfront.net/spaces/2bdd3fd2-f331-4555-b94f-2be4a5f85303.png',
      189.99,
      new Date('01-01-2019'),
      new Date('31-12-2019')
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
