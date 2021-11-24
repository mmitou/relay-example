/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppRepositoryNameQueryVariables = {};
export type AppRepositoryNameQueryResponse = {
    readonly repository: {
        readonly " $fragmentRefs": FragmentRefs<"RepositoryNameRepositoryFragment_repository">;
    } | null;
};
export type AppRepositoryNameQuery = {
    readonly response: AppRepositoryNameQueryResponse;
    readonly variables: AppRepositoryNameQueryVariables;
};



/*
query AppRepositoryNameQuery {
  repository(owner: "facebook", name: "relay") {
    ...RepositoryNameRepositoryFragment_repository
    id
  }
}

fragment RepositoryNameRepositoryFragment_repository on Repository {
  name
  createdAt
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
    ];
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
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "RepositoryNameRepositoryFragment_repository"
                        }
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
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                        },
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
            "cacheID": "df1c5bb61f43c8258aeaf682b873583a",
            "id": null,
            "metadata": {},
            "name": "AppRepositoryNameQuery",
            "operationKind": "query",
            "text": "query AppRepositoryNameQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    ...RepositoryNameRepositoryFragment_repository\n    id\n  }\n}\n\nfragment RepositoryNameRepositoryFragment_repository on Repository {\n  name\n  createdAt\n}\n"
        }
    } as any;
})();
(node as any).hash = '992266e428014546f9396f1d8a61168a';
export default node;
