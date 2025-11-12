import SampleQueue from "../queues/SampleQueue";

export default async function (name: string, payload: Record<string, unknown>) {
    // QueueName.add(jobName, {})
    await SampleQueue.add(name, payload);
    console.log("Successfully Added a new job");
}
