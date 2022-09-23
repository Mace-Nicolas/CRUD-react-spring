package com.nico.aeropicker.controller;

import com.nico.aeropicker.model.Aircraft;
import com.nico.aeropicker.service.AircraftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aircraft")
public class AircraftController {
    @Autowired
    private AircraftService aircraftService;

    @PostMapping("/add")
    public String add(@RequestBody Aircraft aircraft){
        aircraftService.saveAircraft(aircraft);
        return "New Aircraft successfully added";
    }

    @GetMapping("/getAll")
    public List<Aircraft> getAllAircrafts() {
        return aircraftService.getAllAircrafts();
    }
}
