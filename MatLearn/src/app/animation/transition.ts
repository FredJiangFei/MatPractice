import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
} from '@angular/animations';

export const openClose = trigger('openClose', [
    state('true', style({ height: '200px', opacity: 1, backgroundColor: 'yellow' })),
    state('false', style({ height: '100px', opacity: 0.5, backgroundColor: 'green' })),
    transition('true <=> false', [ animate('.5s') ])
]);

export const insertRemove = trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('1s', style({ opacity: 0 }))
    ])
  ]);

  export const filterAnimat = trigger('filterAnimation', [
    transition(':enter, * => 0, * => -1', []),
    transition(':increment', [
      query(':enter', [
        style({ opacity: 0, width: '0px' }),
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 1, width: '*' })),
        ]),
      ], { optional: true })
    ]),
    transition(':decrement', [
      query(':leave', [
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
        ]),
      ])
    ]),
  ]);

