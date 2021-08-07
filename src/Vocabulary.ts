export enum Service {
    CLIENT,
    SERVER
}

export enum TypeCommunication {
    AUTHENTICATE,
    STATUS_MACHINE,
    INSTRUCTION,
    FILE_MANAGER,
    FOLDER,
    FILE
}


export enum TypeCommunicationAction {
    AUTHENTICATE,
    STATUS_MACHINE,
    INSTRUCTION,
    FILE_MANAGER,

    FOLDER_CREATE,
    FOLDER_MODIFY,
    FOLDER_DELETE,
    FILE_CREATE,
    FILE_MODIFY,
    FILE_DELETE
}

export enum Status {

}

export enum Reason {
    UNKNOWN_ONTOLOGY,
    ACCEPT_SUBSCRIPTION,
    ACCEPT_PROPOSE,
    ACCEPT_CFP,
    ACCEPT_REQUEST,
    ACCEPT_RESPONSE,
    ACCEPT_CANCEL,
    ERROR_SUBSCRIPTION,
    ERROR_PROPOSE,
    ERROR_CFP,
    ERROR_REQUEST,
    ERROR_RESPONSE,
    ERROR_CANCEL
}

export enum Incidence {
    UNKNOWN_MESSAGE,
    UNKNOWN_SERVER,
    UNKNOWN_CLIENT,
    UNKNOWN_USER,
}

export interface Vocabulary {
    service: Service;
    reason: Reason;
}