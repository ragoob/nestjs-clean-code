export interface UnitOfWork{
    commitChanges(): Promise<void>;
    update<T>(entity: T): Promise<void>;
}