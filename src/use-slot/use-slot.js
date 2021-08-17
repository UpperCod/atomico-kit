import { useState, useEffect } from "atomico";
/**
 *
 * @param {import("atomico").Ref<HTMLSlotElement>} ref
 */
export function useSlot(ref) {
  const [childNodes, setChildNodes] = useState([]);

  useEffect(() => {
    const { current } = ref;
    const type = "slotchange";
    // Take the existing children
    setChildNodes(current.assignedNodes());
    // handler subscriber to the event
    const handler = () => setChildNodes(current.assignedNodes());
    // listener and unlistener
    current.addEventListener(type, handler);
    return () => current.removeEventListener(type, handler);
  }, []);

  return childNodes;
}
