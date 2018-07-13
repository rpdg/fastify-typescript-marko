declare const GLOBAL: {
	imgPath: string;
	uploadPath: string;
	apiPath: string;
};

declare const WeixinJSBridge: any;

declare const System: any;

declare module "*.json" {
	const value: any;
	export const version: string;
	export default value;
}

