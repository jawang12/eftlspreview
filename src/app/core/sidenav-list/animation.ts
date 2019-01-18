import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  keyframes,
  state
} from '@angular/animations';

export const expandedStateTrigger = trigger('expandedState', [
  state(
    'collapsed',
    style({
      transform: 'rotate(0deg)'
    })
  ),
  state(
    'expanded',
    style({
      transform: 'rotate(90deg)'
    })
  ),
  transition(
    'collapsed <=> expanded',
    animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
  )
]);

export const staggeredListStateTrigger = trigger('staggeredListState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          transform: 'translateY(-100%)',
          opacity: '0',
          height: '0px'
        }),
        stagger('50ms ease-in', [
          animate(
            '50ms ease-in',
            keyframes([
              style({
                opacity: '.7',
                height: '*',
                transform: 'translateY(20%)',
                offset: '.8'
              }),
              style({
                opacity: '1',
                height: '*',
                transform: 'translateY(0%)',
                offset: '1'
              })
            ])
          )
        ])
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({
          opacity: '1',
          transform: 'translateY(0%)'
        }),
        stagger('50ms ease-out', [
          animate(
            '50ms ease-out',
            keyframes([
              style({
                opacity: 1,
                height: '*',
                transform: 'translateY(0%)',
                offset: '0'
              }),
              style({
                height: '*',
                opacity: '.1',
                transform: 'translateY(-80%)',
                offset: '0.2'
              }),
              style({
                opacity: '0',
                height: '0px',
                margin: '0px',
                transform: 'translateY(-100%)',
                offset: '1'
              })
            ])
          )
        ])
      ],
      { optional: true }
    )
  ])
]);
