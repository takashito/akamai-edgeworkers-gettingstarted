/// <reference types="akamai-edgeworkers"/>

import { logger } from 'log';
import URLSearchParams from 'url-search-params';
import URLParse from "url-parse";
import qs from "query-string";
import { httpRequest } from 'http-request'
import { createResponse } from 'create-response';

export async function onClientRequest(request : EW.IngressClientRequest) {
  logger.log('[DEBUG] request : %s', JSON.stringify(request));
}

export function onClientResponse(request: EW.ImmutableRequest, response: EW.Response) {
  logger.log('[DEBUG] request : %s', JSON.stringify(request));
}

export function onOriginRequest(request: EW.ImmutableRequest) {
  logger.log('[DEBUG] request : %s', JSON.stringify(request));
}

export function onOriginResponse(request: EW.ImmutableRequest, response: EW.Response) {
  logger.log('[DEBUG] request : %s', JSON.stringify(request));
}

// when exporting responseProvider onOriginRequest & onOriginResponse will not be triggered
async function responseProvider(request: EW.ImmutableRequest) {
  logger.log('[DEBUG] request : %s', JSON.stringify(request));
  
  return httpRequest(`${request.scheme}://${request.host}${request.url}`).then(response => {
    return createResponse(
      response.status,
      response.getHeaders(),
      response.body
    )});
}
