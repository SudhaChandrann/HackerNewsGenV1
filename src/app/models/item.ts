import { ItemPreview } from '../models/itemPreview';

export class Item{
    id: number;	
    deleted: boolean;	
    type: string;	
    by: string;	
    time: number;
    text?: string;	
    dead?: boolean;	
    parent?: number;	
    poll?: number	
    kids: number[];
    url: string;
    score: number;	
    title: string;
    parts?: number[];	
    descendants: number;
    itemPreview?: ItemPreview = {};
    isFav?: boolean;
}