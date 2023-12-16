import { useEffect, useState } from "atomico";

/**
 * @type {Status}
 */
export const Status = {
  quiet: "",
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};
/**
 * @return {State}
 */
const initalState = () => [, ""];
/**
 * @template {()=>Promise<any>} T
 * @example
 * ```js
 * const [executePromise, setExecutePromise] = useState();
 * const [ result, status ] = usePromise(()=>fetch("./any").then(res=>res.json()),executePromise);
 * ```
 * @param {T} promise -
 * @param {boolean} run
 * @param {any[]} [args]
 * @returns {T extends (...args:any[])=>Promise<infer R> ?  State<R>  :  State<any> }
 */
export function usePromise(promise, run, args = []) {
  const [state, setState] = useState(initalState);

  useEffect(() => {
    if (run) {
      setState(([result]) => [result, Status.pending]);
      promise().then(
        (result) => run && setState(() => [result, Status.fulfilled]),
        (result) => run && setState(() => [result, Status.rejected])
      );
    }
    return () => {
      setState((state) => {
        const [result, status] = state;
        // clear the state since the promise has been canceled
        return status == Status.pending ? [result, Status.quiet] : state;
      });
      run = null;
    };
  }, [run, ...args]);

  return state;
}

/**@typedef {Status["quiet"]|Status["pending"]|Status["fulfilled"]|Status["rejected"]} PromiseStatus */

/**
 * @template T
 * @typedef {[T,PromiseStatus]} State
 **/

/**
 * @typedef {Object} Status
 * @property {""} quiet
 * @property {"pending"} pending
 * @property {"fulfilled"} fulfilled
 * @property {"rejected"} rejected
 */