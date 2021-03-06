import { HttpParameterCodec } from '@angular/common/http';
export declare class HttpUrlStandardEncodingCodec implements HttpParameterCodec {
    encodeKey(key: string): string;
    encodeValue(value: string): string;
    decodeKey(key: string): string;
    decodeValue(value: string): string;
}
