import { getUserAvailability } from "@/actions/availability";
import { defaultAvailability } from "./data";
import AvailabilityForm from "./_components/availability-form";

const  Availability = async () => {
    const availability = await getUserAvailability();
    console.log(availability);
    
    return (
        <AvailabilityForm initialData={availability || defaultAvailability} />
    )
}

export default Availability;