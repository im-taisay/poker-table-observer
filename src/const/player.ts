export const PF_ACTION = {
  FOLD: 'fold',
  CALL: 'call',
  RAISE: 'raise',
  RE_RAISE: 'reRaise',
} as const;

export type PF_ACTION_TYPE = (typeof PF_ACTION)[keyof typeof PF_ACTION];
