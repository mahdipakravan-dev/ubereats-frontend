import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AllCategoriesOutputDto = {
  __typename?: 'AllCategoriesOutputDto';
  categories?: Maybe<Array<Category>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AllRestaurantsInput = {
  page?: InputMaybe<Scalars['Float']>;
};

export type AllRestaurantsOutput = {
  __typename?: 'AllRestaurantsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  pageNumber?: Maybe<Scalars['Float']>;
  results?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type Category = {
  __typename?: 'Category';
  avatar: Scalars['String'];
  name: Scalars['String'];
  restaurantCount: Scalars['Float'];
  restaurants: Array<Restaurant>;
  slug: Scalars['String'];
};

export type CategoryDto = {
  page?: InputMaybe<Scalars['Float']>;
  slug: Scalars['String'];
};

export type CategoryInputType = {
  avatar?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  restaurantCount: Scalars['Float'];
  restaurants: Array<RestaurantInputType>;
  slug: Scalars['String'];
};

export type CategoryOutput = {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  pageNumber?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type CreateAccountDto = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type CreateAccountOutputDto = {
  __typename?: 'CreateAccountOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateDishDto = {
  description: Scalars['String'];
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionInputType>>;
  photo: Scalars['String'];
  price: Scalars['Float'];
  restaurantId: Scalars['Float'];
};

export type CreateDishOutputDto = {
  __typename?: 'CreateDishOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateOrderDto = {
  items: Array<CreateOrderItemInput>;
  restaurantId: Scalars['Int'];
};

export type CreateOrderItemInput = {
  dishId: Scalars['Int'];
  options?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type CreateOrderOutputDto = {
  __typename?: 'CreateOrderOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orderId?: Maybe<Scalars['Int']>;
};

export type CreateRestaurantDto = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  categoryName: Scalars['String'];
  name: Scalars['String'];
};

export type CreateRestaurantOutputDto = {
  __typename?: 'CreateRestaurantOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteRestaurantDto = {
  restaurantId: Scalars['Float'];
};

export type DeleteRestaurantOutputDto = {
  __typename?: 'DeleteRestaurantOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Dish = {
  __typename?: 'Dish';
  description: Scalars['String'];
  name: Scalars['String'];
  options?: Maybe<Array<DishChoice>>;
  photo: Scalars['String'];
  price: Scalars['Float'];
  restaurant?: Maybe<Restaurant>;
};

export type DishChoice = {
  __typename?: 'DishChoice';
  choices: Array<DishChoiceItem>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DishChoiceItem = {
  __typename?: 'DishChoiceItem';
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DishOptionInputType = {
  choices: Array<DishOptionItemType>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DishOptionItemType = {
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type EditAccountInputDto = {
  email?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<OrderInputType>>;
  password?: InputMaybe<Scalars['String']>;
  restaurants?: InputMaybe<Array<RestaurantInputType>>;
  rides?: InputMaybe<Array<OrderInputType>>;
  role?: InputMaybe<UserRole>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type EditAccountOutputDto = {
  __typename?: 'EditAccountOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditDishDto = {
  description?: InputMaybe<Scalars['String']>;
  dishId: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<DishOptionInputType>>;
  photo?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type EditDishOutputDto = {
  __typename?: 'EditDishOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditOrderInput = {
  status?: InputMaybe<OrderStatus>;
};

export type EditOrderOutput = {
  __typename?: 'EditOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditRestaurantDto = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['Float'];
};

export type EditRestaurantOutputDto = {
  __typename?: 'EditRestaurantOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetOrderInput = {
  id: Scalars['Float'];
};

export type GetOrderOutput = {
  __typename?: 'GetOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  order?: Maybe<Order>;
};

export type GetOrdersInput = {
  status?: InputMaybe<OrderStatus>;
};

export type GetOrdersOutput = {
  __typename?: 'GetOrdersOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orders?: Maybe<Array<Order>>;
};

export type LoginAccountDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutputDto = {
  __typename?: 'LoginOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  account_edit: EditAccountOutputDto;
  account_login: LoginOutputDto;
  account_register: CreateAccountOutputDto;
  account_verify: VerifyAccountOutputDto;
  dish_create: CreateDishOutputDto;
  dish_edit: EditDishOutputDto;
  isReady: Scalars['Boolean'];
  order_create: CreateOrderOutputDto;
  order_edit: EditOrderOutput;
  restaurant_create: CreateRestaurantOutputDto;
  restaurant_delete: DeleteRestaurantOutputDto;
  restaurant_edit: EditRestaurantOutputDto;
};


export type MutationAccount_EditArgs = {
  input: EditAccountInputDto;
};


export type MutationAccount_LoginArgs = {
  input: LoginAccountDto;
};


export type MutationAccount_RegisterArgs = {
  input: CreateAccountDto;
};


export type MutationAccount_VerifyArgs = {
  input: VerifyAccountInputDto;
};


export type MutationDish_CreateArgs = {
  input: CreateDishDto;
};


export type MutationDish_EditArgs = {
  input: EditDishDto;
};


export type MutationOrder_CreateArgs = {
  input: CreateOrderDto;
};


export type MutationOrder_EditArgs = {
  input: EditOrderInput;
};


export type MutationRestaurant_CreateArgs = {
  input: CreateRestaurantDto;
};


export type MutationRestaurant_DeleteArgs = {
  input: DeleteRestaurantDto;
};


export type MutationRestaurant_EditArgs = {
  input: EditRestaurantDto;
};

export type Order = {
  __typename?: 'Order';
  customer: User;
  driver?: Maybe<User>;
  items: Array<OrderItem>;
  restaurant: Restaurant;
  status: OrderStatus;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OrderInputType = {
  customer: UserInputType;
  driver?: InputMaybe<UserInputType>;
  items: Array<OrderItemInputType>;
  restaurant: RestaurantInputType;
  status?: InputMaybe<OrderStatus>;
  totalPrice?: InputMaybe<Scalars['Float']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  dish: Dish;
  options?: Maybe<Array<OrderItemOption>>;
};

export type OrderItemInputType = {
  dish: RestaurantDishType;
  options?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  choice?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type OrderItemOptionInputType = {
  choice?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export enum OrderStatus {
  Cooked = 'Cooked',
  Cooking = 'Cooking',
  Delivered = 'Delivered',
  Pending = 'Pending',
  PickedUp = 'PickedUp'
}

export type Query = {
  __typename?: 'Query';
  account: UserProfileOutputDto;
  categories_all: AllCategoriesOutputDto;
  category: CategoryOutput;
  order_getMany: GetOrdersOutput;
  order_getOne: GetOrderOutput;
  restaurant_all: AllRestaurantsOutput;
  restaurant_search: SearchRestaurantOutputDto;
};


export type QueryAccountArgs = {
  userId: Scalars['Float'];
};


export type QueryCategoryArgs = {
  input: CategoryDto;
};


export type QueryOrder_GetManyArgs = {
  input: GetOrdersInput;
};


export type QueryOrder_GetOneArgs = {
  input: GetOrderInput;
};


export type QueryRestaurant_AllArgs = {
  input: AllRestaurantsInput;
};


export type QueryRestaurant_SearchArgs = {
  input: SearchRestaurantDto;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  avatar: Scalars['String'];
  category?: Maybe<Category>;
  dishes: Array<Dish>;
  name: Scalars['String'];
  order: Array<Order>;
  owner: User;
  verified: Scalars['Boolean'];
};

export type RestaurantDishType = {
  description: Scalars['String'];
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionInputType>>;
  photo: Scalars['String'];
  price: Scalars['Float'];
  restaurant?: InputMaybe<RestaurantInputType>;
};

export type RestaurantInputType = {
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<CategoryInputType>;
  dishes: Array<RestaurantDishType>;
  name: Scalars['String'];
  order: Array<OrderInputType>;
  owner: UserInputType;
  verified: Scalars['Boolean'];
};

export type SearchRestaurantDto = {
  page?: InputMaybe<Scalars['Float']>;
  query: Scalars['String'];
};

export type SearchRestaurantOutputDto = {
  __typename?: 'SearchRestaurantOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  pageNumber?: Maybe<Scalars['Float']>;
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderSubscription: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  order: Array<Order>;
  password: Scalars['String'];
  restaurants: Array<Restaurant>;
  rides: Array<Order>;
  role: UserRole;
  verified: Scalars['Boolean'];
};

export type UserInputType = {
  email: Scalars['String'];
  order: Array<OrderInputType>;
  password: Scalars['String'];
  restaurants: Array<RestaurantInputType>;
  rides: Array<OrderInputType>;
  role: UserRole;
  verified: Scalars['Boolean'];
};

export type UserProfileOutputDto = {
  __typename?: 'UserProfileOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'CLIENT',
  Delivery = 'DELIVERY',
  Owner = 'OWNER'
}

export type VerifyAccountInputDto = {
  code: Scalars['String'];
};

export type VerifyAccountOutputDto = {
  __typename?: 'VerifyAccountOutputDto';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};
