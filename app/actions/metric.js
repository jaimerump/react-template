import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_METRIC = Symbol('LOADED_METRIC');
export function loadMetric(params) {

  params.user_id = params.user_id || '1'
  console.log("Loading metric with params:", params);

  return {
    [CALL_API]: {
      method: 'post',
      path: '/api/metric',
      successType: LOADED_METRIC,
      body: {
        user_id: params.user_id,
        view_id: params.view_id,
        advertiser_id: params.advertiser_id,
        metric: params.metric,
        start_date: params.start_date,
        end_date: params.end_date,
        dimensions: params.dimensions,
        filters: params.filters
      }
    }
  }
}