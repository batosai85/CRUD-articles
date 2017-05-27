import Crud from "./crud.js";
import Dialog from "./dialog.js";

export default function Services(module){
    Crud(module);
    Dialog(module);
}