import {
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AddCommentFormSchema, ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  // Асинхронный редьюсер
  loginForm?: LoginSchema
  profile?: ProfileSchema,
  articleDetails?: ArticleDetailsSchema,
  articleDetailsComments: ArticleDetailsCommentsSchema,
  addCommentForm?: AddCommentFormSchema,
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: Reducer<CombinedState<StateSchema>>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T>{
  rejectValue: T
  extra: ThunkExtraArg,
  state: StateSchema
}
