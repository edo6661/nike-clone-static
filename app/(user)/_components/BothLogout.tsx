import FormLogout from "./FormLogoutClient";
import { useCurrentUser } from "@/hooks/lib/useCurrentUser";

const BothLogout = () => {
  const session = useCurrentUser();
  console.log(session);
  return <FormLogout />;
};

export default BothLogout;
