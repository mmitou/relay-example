/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AppRepositoryNameQueryVariables = {};
export type AppRepositoryNameQueryResponse = {
    readonly repository: {
        readonly name: string;
        readonly createdAt: unknown;
    } | null;
};
export type AppRepositoryNameQuery = {
    readonly response: AppRepositoryNameQueryResponse;
    readonly variables: AppRepositoryNameQueryVariables;
};



/*
query AppRepositoryNameQuery {
  repository(owner: "facebook", name: "relay") {
    name
    createdAt
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "kind": "Literal",
            "name": "name",
            "value": "relay"
        } as any,
        {
            "kind": "Literal",
            "name": "owner",
            "value": "facebook"
        } as any
    ], v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any, v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "AppRepositoryNameQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v0 /*: any*/),
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "repository",
                    "plural": false,
                    "selections": [
                        (v1 /*: any*/),
                        (v2 /*: any*/)
                    ],
                    "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "AppRepositoryNameQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v0 /*: any*/),
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "repository",
                    "plural": false,
                    "selections": [
                        (v1 /*: any*/),
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                        }
                    ],
                    "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
                }
            ]
        },
        "params": {
            "cacheID": "7ec665d76e22d50425bfe44e8b5662d6",
            "id": null,
            "metadata": {},
            "name": "AppRepositoryNameQuery",
            "operationKind": "query",
            "text": "query AppRepositoryNameQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    createdAt\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '146c4515d274e71d747694fd80197f45';
export default node;
