import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_PROBABILITY = Symbol('LOADED_PROBABILITY');
export function loadProbability(params) {

  params.user_id = params.user_id || '1'
  console.log("Loading probability with params:", params);

  return {
    [CALL_API]: {
      method: 'post',
      path: '/api/probability',
      successType: LOADED_PROBABILITY,
      body: {
        user_id: params.user_id,
        view_id: params.view_id,
        advertiser_id: params.advertiser_id,
        operator: 'probability',
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