import { UnitOfWork } from "../core/unitOfwork";

export class UnitOfWorkImpl implements UnitOfWork{
    commitChanges(): Promise<void> {
       console.log('Committed successfully');
       return Promise.resolve();
    }
    update<T>(entity: T): Promise<void> {
        console.log('updated');
        return Promise.resolve();
    }

}