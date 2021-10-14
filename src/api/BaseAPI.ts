import {HTTPTransport} from "../helpers/api-call";

export default abstract class BaseAPI {
    protected http: HTTPTransport

    protected constructor(endpoint: string) {
        this.http = new HTTPTransport(endpoint)
    }

    public abstract create?:(data: any): Promise<unknown>;

    public abstract read?:(identifier?: string): Promise<unknown>;

    public abstract update?:(identifier?: string, data: unknown): Promise<unknown>;
    public abstract update?:(identifier?: string, data: unknown): Promise<unknown>;

    public abstract delete?:(identifier: string): Promise<unknown>;

}