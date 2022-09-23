package com.nico.aeropicker.service;

import com.nico.aeropicker.model.Aircraft;

import java.util.List;

public interface AircraftService {
    public Aircraft saveAircraft(Aircraft aircraft);
    public List<Aircraft> getAllAircrafts();


}
