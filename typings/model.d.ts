export interface Program {
	id: string;
	title: string;
    cover: string;
    url: ProgramUrl;
}
export interface ProgramUrl{
    FD: string;
    SD: string;
    HD: string;
}