import { useRouter } from "next/router";

export default function DynamicRoutes() {
   const route = useRouter();

   const {
      query: { dynamic, id },
   } = route;
   return (
      <div>
         data: {dynamic} - {id}
      </div>
   );
}
