import { RequestOptions, IncomingMessage } from "https";

declare module "agents-fetch"

export type Type = "JSON" | "Buffer" | "Status" | "Text" | "Response"

export function get(url: string, type: Type, options: RequestOptions): Promise<void>;

export function get(url: string, type: "Status", options: RequestOptions): Promise<{statusCode: number, statusMessage}>;

export function get(url: string, type: "Response", options: RequestOptions): Promise<IncomingMessage>;

export function get(url: string, type: "Text", options: RequestOptions): Promise<string>

export function post(url: string, type: Type, options: RequestOptions): Promise<void>;

export function post(url: string, type: "Status", options: RequestOptions): Promise<{statusCode: number, statusMessage}>;

export function post(url: string, type: "Response", options: RequestOptions): Promise<IncomingMessage>;

export function post(url: string, type: "Text", options: RequestOptions): Promise<string>

export default function(url: string,type: "Status",options: RequestOptions): Promise<{statusCode: number, statusMessage}>;

export default function(url: string, type: Type, options: RequestOptions): Promise<void>;

export default function(url: string,type: "Response",options: RequestOptions): Promise<IncomingMessage>;

export default function(url: string,type: "Text", options: RequestOptions): Promise<string>
