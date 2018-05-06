/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Qiming Zhao <chemzqm@gmail> (https://github.com/chemzqm)
*******************************************************************/
import { CompleteOption, VimCompleteItem, CompleteResult } from '../types';
import Source from './source';
export declare type Callback = () => void;
export default class Complete {
    id: string;
    results: CompleteResult[] | null;
    private bufnr;
    private linenr;
    private colnr;
    private line;
    private col;
    private input;
    private word;
    private filetype;
    private fuzzy;
    constructor(opts: Partial<CompleteOption>);
    getOption(): CompleteOption | null;
    resuable(complete: Complete): boolean;
    private completeSource(source, opt);
    filterResults(results: CompleteResult[], input: string, cword: string): VimCompleteItem[];
    doComplete(sources: Source[]): Promise<VimCompleteItem[]>;
}
