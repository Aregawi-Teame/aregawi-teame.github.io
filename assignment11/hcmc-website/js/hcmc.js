"use strict";
import { Patient } from "./model/patient.js";
$(document).ready(function(){
    const patientData = [];

    $("#patientForm").submit(function(event){
        event.preventDefault();
        console.log(event.target);

        const patientId = $("#patientIdNumber").val();
        const firstName = $("#firstName").val();
        const middleName =$("#middleInitials").val();
        const lastName = $("#lastName").val();
        const dateOfBirth = $("#dateOfBirth").val();
        const department  = $("#ddlDepartment").val();
        const isOutPatient = $("input[name = 'radioIsOutPatient']:checked").val();
        const patient = new Patient(patientId, firstName, middleName, lastName);
        patient.setDateofBirth(dateOfBirth);
        patient.setDepartment(department);
        patient.setOutPatient(isOutPatient);

        patientData.push(patient);
        registerPatient1(patient);
      //document.getElementById("patientForm").reset();
      $("#btnReset").click();
    });
    function registerPatient(newPatient){
        const tblDatas = document.querySelector("#tbodyPatientsList");
        const newRow = tblDatas.insertRow(-1);
        const newCellPatientId = newRow.insertCell(0);
        const strNewPatientId = document.createTextNode(`${newPatient.getPatientId()}`);
        newCellPatientId.appendChild(strNewPatientId);
        
        const newCellFirstName = newRow.insertCell(1);
        const strNewFirstName = document.createTextNode(`${newPatient.getFirstName()}`);
        newCellFirstName.appendChild(strNewFirstName);

        const newCellMiddleName = newRow.insertCell(2);
        const strNewMiddleName = document.createTextNode(`${newPatient.getMiddleName()}`);
        newCellMiddleName.appendChild(strNewMiddleName);

        const newCellLastName = newRow.insertCell(3);
        const strNewlastName = document.createTextNode(`${newPatient.getLastName()}`);
        newCellLastName.appendChild(strNewlastName);

        const newCellDateOfBirth = newRow.insertCell(4);
        const strNewDateOfBirth = document.createTextNode(`${newPatient.getDateOfBirth()}`);
        newCellDateOfBirth.appendChild(strNewDateOfBirth);

        const newCellDepartment = newRow.insertCell(5);
        const strNewDepartment = document.createTextNode(`${newPatient.getDepartment()}`);
        newCellDepartment.appendChild(strNewDepartment);

        const newCellOutOfPatient = newRow.insertCell(6);
        const strNewOutOfPatient = document.createTextNode(`${newPatient.getOutPatient()}`);
        newCellOutOfPatient.appendChild(strNewOutOfPatient);

        console.log("Account Created");
    }
    // Method two using delegation jQuery

    function registerPatient1(newPatient){
        const patientStr = `<tr><td>${newPatient.getPatientId()}</td><td>${newPatient.getFirstName()}</td><td>${newPatient.getMiddleName()}</td><td>${newPatient.getLastName()}</td><td class="dob">${newPatient.getDateOfBirth()}</td><td>${newPatient.getDepartment()}</td><td class = "isOut">${newPatient.getOutPatient()}</td></tr>`;
        $("#tbodyPatientsList").append(patientStr);
    }
    $("#chkShowOutPatients").click(function(){
        if($(this).is(':checked')){
                $('tr').show();
                $('tr td.isOut').each(function() {
                    if ($(this).text()=="No")
                    {
                        $(this).parent().hide();
                    }
                });
        }
        else{
            $('tr').show();
        }
    });
    $("#chkElderlyPatients").click(function(){
        if($(this).is(':checked')){
                $('tr').show();
                $('tr td.dob').each(function() {
                    const today = new Date();
                    const dob = new Date($(this).text());
                    const age = Math.floor((today-dob)/(365.25 * 24 * 60 * 60 * 1000));
                    if (age<65)
                    {
                        $(this).parent().hide();
                    }
                });
        }
        else{
            $('tr').show();
        }
    });
});