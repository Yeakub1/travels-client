import { removeFromLocalStorage } from "@/Services/Action/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const isBlockHelper = (message: string) => {
  const router = useRouter();

  removeFromLocalStorage();

  toast.error(message);

  router.push("/login");
};

export default isBlockHelper;
