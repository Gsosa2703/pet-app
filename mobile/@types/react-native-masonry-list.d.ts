declare module 'react-native-masonry-list' {
 import { FlatListProps } from 'react-native';

 export interface MasonryListProps<T> extends FlatListProps<T> {
   numColumns?: number;
   renderItem: ({ item, index }: { item: T; index: number }) => JSX.Element;
 }

 export default function MasonryList<T>(props: MasonryListProps<T>): JSX.Element;
}
