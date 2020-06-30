import { Node } from './node';

export interface Edge {
  next: Node;
  node: Node;
  previous: Node;
}
