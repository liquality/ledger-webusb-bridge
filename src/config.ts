export const BRIDGE_IFRAME_NAME = 'HW-IFRAME';

export type AppType = 'ETH' | 'BTC';

export type CallType = 'METHOD' | 'ASYNC_METHOD' | 'PROP';

export interface CallData {
    app: AppType,
    method: string,
    payload: any,
    callType: CallType
}

export const BUFFER_PARAM_METHODS_IN: {
    [A in AppType]?: string[];
  } = {
    'BTC' : ['createPaymentTransactionNew']
};
export const BUFFER_PARAM_METHODS_OUT: {
  [A in AppType]?: string[];
} = {
  'BTC' : ['serializeTransactionOutputs', 'createPaymentTransactionNew']
};