import { Client, ClientConfig } from 'pg';

export async function ClientConfig(config: string | ClientConfig){
    const connection = new Client(config);
    return connection
}