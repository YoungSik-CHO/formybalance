import { AlertColor } from "@mui/material";
import { type } from "os";

export interface AlertType {
    message : string,
    type : AlertColor
}

export const alertTypeEmpty = { 'message' : '', 'type' : 'success'};

export type localStorageType = string | null;

export interface WorkInterF {
    'id'       : string,
    'currDate' : string,
    'currTime' : string,
    'currDateTime' : string
}