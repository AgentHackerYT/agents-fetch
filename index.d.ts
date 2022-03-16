import { RequestOptions, IncomingMessage } from "https";

declare module "agents-fetch"

export type Type = "JSON" | "Buffer" | "Status" | "Text" | "Response"

export function get(url: string, type: Type, options: RequestOptions, callback: (response) => void)

export function get(url: string, type: "Status", options: RequestOptions, callback: (response: {statusCode: number, statusMessage}) => void)

export function get(url: string, type: "Response", options: RequestOptions, callback: (response: IncomingMessage) => void)

export function get(url: string, type: "Text", options: RequestOptions, callback: (response: string) => void)

export function post(url: string, type: Type, options: RequestOptions, callback: (response) => void)

export function post(url: string, type: "Status", options: RequestOptions, callback: (response: {statusCode: number, statusMessage}) => void)

export function post(url: string, type: "Response", options: RequestOptions, callback: (response: IncomingMessage) => void)

export function post(url: string, type: "Text", options: RequestOptions, callback: (response: string) => void)
