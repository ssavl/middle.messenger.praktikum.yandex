import EventBus from '../modules/EventBus';
import isPlainObject from '../utils/isPlainObject';
import { defaultAvatar } from '../constans/urls';
// import { MessageObj } from '../components/Messages';

export type Chat = {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: {
            first_name: string;
            second_name: string;
            avatar: string;
            email: string;
            login: string;
            phone: string;
            display_name: string;
        };
        time: string;
        content: string;
    };
};
export type Chats = Chat[];

export type StoreUser = {
    id: number | null;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    phone: string;
    display_name: string | null;
    avatar: string | null;
    role?: string;
};

export type TStore = {
    userData: StoreUser;
    chats: Chat[];
    activeChat: Chat | Record<string, unknown>;
    activeChatUsers: StoreUser[] | [];
    searchUserInput: string;
    searchUserList: StoreUser[] | [];
    // activeChatMessages: MessageObj[];
    activeChatAvatar: string;
    updateMessenger: boolean;
};

export const storeUserInitial = {
    updateMessenger: false,
    userData: {
        id: null,
        first_name: '',
        second_name: '',
        login: '',
        email: '',
        phone: '',
        display_name: '',
        avatar: defaultAvatar,
    },
    chats: [],
    activeChat: {},
    searchUserInput: '',
    activeChatUsers: [],
    searchUserList: [],
    activeChatMessages: [],
    activeChatAvatar: '',
};

const storeObj: TStore = storeUserInitial;

export const storeEventBus = new EventBus();

export type ChatObj = {
    id: number;
    avatar: string;
    title: string;
    created_by: number;
    unread_count: number;
    last_message: string;
};
type StoreKeys = keyof TStore;
type StoreValues = TStore[StoreKeys];

const store = new Proxy(storeObj, {
    get: (target, prop: keyof TStore) => {
        const value = target[prop];
        if (typeof value === 'function') {
            return (value as () => any).bind(target);
        }
        return value;
    },
    set: (target, prop: StoreKeys, value: StoreValues) => {
        if (isPlainObject(value)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            target[prop] = { ...value };
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            target[prop] = value;
        }
        storeEventBus.emit(prop, { ...store });
        return true;
    },
});

export default store;