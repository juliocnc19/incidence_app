import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../data/api/loginUser";
import { saveToken } from "../../utils/lib/saveToken";
import { router } from "expo-router";


export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      await saveToken(data.token)
      router.push("/(main)/dashboard")
    },
    onError:(e)=>{
      console.log(e)
    }
  })
}
