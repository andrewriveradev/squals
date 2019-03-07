/** @module S3Bucket */
/**
 * RedirRule makes a valid cloudformation obj.
 *
 * @description AWS:S3:: Make a Redirection Rule Config for a WebsiteConfiguration.
 * @param param - Asd.
 * @param param.to  - The Destination url - where the path will be passed through or slighted altered.
 * @param param.when - String values are treated as server Status codes - numbers are treated as pathprefixes.
 * @param param.replacer - Looks for the `reqd.when` and replaces it in the path.
 * @param param.doFullReplace - Changes the mode to no longer slight modidy the path before redirection. Instead, it rewrites it.
 * @param param.ext.HttpRedirectCode - Feel free to pass in AWS-CFN-property names like `HttpRedirectCode`.
 * @example
 *  var output1 = redirRule({ to:'https://federali.es', when: '/docs' , replacer:'/documents', doFullReplace:true})
 *  var output2 = redirRule({ to:'https://federali.es', when: 404 })
 *  var output3 = redirRule({ to:'https://federali.es/', when: '/doc', replacer: '/docs', doFullReplace: true })
 * @returns {outRuleElem} Cloudoformation object.
 */
export declare const redirRule: (param: InRedirRule) => unknown;
export interface InRedirRule {
    to: string;
    when: string | number;
    replacer?: string;
    doFullReplace?: boolean;
    ext?: {
        [key: string]: string;
    };
}
export interface OutRouteRule {
    RedirectRule: {
        HostName?: string;
        HttpRedirectCode?: string;
        Protocol?: string;
        ReplaceKeyPrefixWith?: string;
        ReplaceKeyWith?: never;
    } | {
        HostName?: string;
        HttpRedirectCode?: string;
        Protocol?: string;
        ReplaceKeyPrefixWith?: never;
        ReplaceKeyWith?: string;
    };
    RoutingRuleCondition: {
        HttpErrorCodeReturnedEquals?: string;
        KeyPrefixEquals?: string;
    };
}
//# sourceMappingURL=redirectRule.d.ts.map