import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_OPERATION = Symbol('LOADED_OPERATION');
export function loadOperation(params) {

  params.user_id = params.user_id || '1'
  console.log("Loading operation with params:", params);

  return {
    [CALL_API]: {
      method: 'post',
      path: '/api/operation',
      successType: LOADED_OPERATION,
      body: {
        user_id: params.user_id,
        view_id: params.view_id,
        advertiser_id: params.advertiser_id,
        operator: params.operator,
        operand1: params.operand1,
        operand2: params.operand2,
        start_date: params.start_date,
        end_date: params.end_date,
        dimensions: params.dimensions,
        filters: params.filters
      }
    }
  }
}