import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { removeFromLocalStorage } from "@/Services/Action/auth.services";



const isBlockHelper = (message: string) => {
  const router = useRouter();
  removeFromLocalStorage();
  toast.error(message);
  router.push("/login");
};

export default isBlockHelper;
