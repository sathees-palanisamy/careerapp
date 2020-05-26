// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_suggest_pb = require('../protos/suggest_pb.js');

function serialize_suggest_CreateSuggestRequest(arg) {
  if (!(arg instanceof protos_suggest_pb.CreateSuggestRequest)) {
    throw new Error('Expected argument of type suggest.CreateSuggestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suggest_CreateSuggestRequest(buffer_arg) {
  return protos_suggest_pb.CreateSuggestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_suggest_CreateSuggestResponse(arg) {
  if (!(arg instanceof protos_suggest_pb.CreateSuggestResponse)) {
    throw new Error('Expected argument of type suggest.CreateSuggestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suggest_CreateSuggestResponse(buffer_arg) {
  return protos_suggest_pb.CreateSuggestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_suggest_DeleteSuggestRequest(arg) {
  if (!(arg instanceof protos_suggest_pb.DeleteSuggestRequest)) {
    throw new Error('Expected argument of type suggest.DeleteSuggestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suggest_DeleteSuggestRequest(buffer_arg) {
  return protos_suggest_pb.DeleteSuggestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_suggest_DeleteSuggestResponse(arg) {
  if (!(arg instanceof protos_suggest_pb.DeleteSuggestResponse)) {
    throw new Error('Expected argument of type suggest.DeleteSuggestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suggest_DeleteSuggestResponse(buffer_arg) {
  return protos_suggest_pb.DeleteSuggestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_suggest_ListSuggestRequest(arg) {
  if (!(arg instanceof protos_suggest_pb.ListSuggestRequest)) {
    throw new Error('Expected argument of type suggest.ListSuggestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suggest_ListSuggestRequest(buffer_arg) {
  return protos_suggest_pb.ListSuggestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_suggest_ListSuggestResponse(arg) {
  if (!(arg instanceof protos_suggest_pb.ListSuggestResponse)) {
    throw new Error('Expected argument of type suggest.ListSuggestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suggest_ListSuggestResponse(buffer_arg) {
  return protos_suggest_pb.ListSuggestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SuggestServiceService = exports.SuggestServiceService = {
  createSuggest: {
    path: '/suggest.SuggestService/CreateSuggest',
    requestStream: false,
    responseStream: false,
    requestType: protos_suggest_pb.CreateSuggestRequest,
    responseType: protos_suggest_pb.CreateSuggestResponse,
    requestSerialize: serialize_suggest_CreateSuggestRequest,
    requestDeserialize: deserialize_suggest_CreateSuggestRequest,
    responseSerialize: serialize_suggest_CreateSuggestResponse,
    responseDeserialize: deserialize_suggest_CreateSuggestResponse,
  },
  listSuggest: {
    path: '/suggest.SuggestService/ListSuggest',
    requestStream: false,
    responseStream: true,
    requestType: protos_suggest_pb.ListSuggestRequest,
    responseType: protos_suggest_pb.ListSuggestResponse,
    requestSerialize: serialize_suggest_ListSuggestRequest,
    requestDeserialize: deserialize_suggest_ListSuggestRequest,
    responseSerialize: serialize_suggest_ListSuggestResponse,
    responseDeserialize: deserialize_suggest_ListSuggestResponse,
  },
  deleteSuggest: {
    path: '/suggest.SuggestService/DeleteSuggest',
    requestStream: false,
    responseStream: false,
    requestType: protos_suggest_pb.DeleteSuggestRequest,
    responseType: protos_suggest_pb.DeleteSuggestResponse,
    requestSerialize: serialize_suggest_DeleteSuggestRequest,
    requestDeserialize: deserialize_suggest_DeleteSuggestRequest,
    responseSerialize: serialize_suggest_DeleteSuggestResponse,
    responseDeserialize: deserialize_suggest_DeleteSuggestResponse,
  },
};

exports.SuggestServiceClient = grpc.makeGenericClientConstructor(SuggestServiceService);
