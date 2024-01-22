import { Schema, model } from "mongoose";

export interface IRobot {
    robotName: string;                  // distinct robot name or model number etc,.
    controlAuthorityId:  string;              // userId of owner person.
    battery: number;                             // battery percentage
    isOperating: boolean;                
    // sensorsFunctionality: {
    //     sensorA: boolean;
    //     sensorB: boolean;
    // }
}

const RobotSchema  =new Schema<IRobot> ({
    robotName: {type: String, required:true},
    controlAuthorityId: {type: String, required:true},
    battery: {type: Number, required: false},
    isOperating: {type: Boolean, required: true}
}
)

export const RobotModel = model<IRobot>("robots", RobotSchema);