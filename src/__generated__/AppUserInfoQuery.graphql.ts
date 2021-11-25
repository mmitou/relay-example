/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AppUserInfoQueryVariables = {
    login: string;
};
export type AppUserInfoQueryResponse = {
    readonly user: {
        readonly name: string | null;
        readonly createdAt: unknown;
        readonly login: string;
        readonly url: unknown;
    } | null;
};
export type AppUserInfoQuery = {
    readonly response: AppUserInfoQueryResponse;
    readonly variables: AppUserInfoQueryVariables;
};



/*
query AppUserInfoQuery(
  $login: String!
) {
  user(login: $login) {
    name
    createdAt
    login
    url
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "login"
        } as any
    ], v1 = [
        {
            "kind": "Variable",
            "name": "login",
            "variableName": "login"
        } as any
    ], v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "login",
        "storageKey": null
    } as any, v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "AppUserInfoQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "AppUserInfoQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "99be77618c46208b0c3e3508a051f831",
            "id": null,
            "metadata": {},
            "name": "AppUserInfoQuery",
            "operationKind": "query",
            "text": "query AppUserInfoQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    name\n    createdAt\n    login\n    url\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '380bc4ca4abfc20d7400f7bf8eda8abe';
export default node;
