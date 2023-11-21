import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "react-query";

const useQueryMutation = <
  TData = unknown,
  TError = unknown,
  TVariables = unknown,
  TContext = unknown
>(
  option: UseMutationOptions<TData, TError, TVariables, TContext>
) => {
  const res = useMutation({
    ...option,
    onError: ({ response }) => {
      //@ts-expect-error this is a type check error
      option.onError?.(response);
      try {
        // console.log(response);
      } catch (e) {
        // console.log(response);
      }
    },
    onSuccess: (response) => {
      //@ts-expect-error this is a type check error
      option.onSuccess?.(response);
    },
  } as UseMutationOptions<unknown, unknown, unknown>) as UseMutationResult<
    TData,
    TError,
    TVariables
  >;

  return {
    ...res,
    //@ts-expect-error this is a type check error
    result: res?.data?.data as TData["data"]["data"] | undefined,
    errorMessage:
      //@ts-expect-error this is a type check error
      res?.error?.response?.data || res.error?.message,
  };
};
export default useQueryMutation;
