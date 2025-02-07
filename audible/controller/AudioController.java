//package com.example.audible.controller;
//
//import com.example.audible.Service.AudioService;
//import com.example.audible.model.Audio;
//import com.example.audible.model.Audiocast;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:5174") // Adjust based on frontend URL
//
//public class AudioController {
//    @Autowired
//    private AudioService audioService;
//
//    @GetMapping("/api/audio")
//    public List<Audio> getAllAudio() {
//        return audioService.getAllAudios();
//    }
//
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Audio> getAudioById(@PathVariable int id) {
//        return audioService.getAudioById(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    @PostMapping("/addAudioDetails")
//    public Audio postAudioDetails(@RequestBody Audio audio){
//        return audioService.saveAudioDetails(audio);
//}}
package com.example.audible.controller;

import com.example.audible.Service.AudioService;
import com.example.audible.model.Audio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174") // Adjust based on frontend URL
public class AudioController {

    @Autowired
    private AudioService audioService;

    @GetMapping("/api/audio")
    public List<Audio> getAllAudio() {
        return audioService.getAllAudios();
    }

    // New endpoint for search functionality
    @GetMapping("/api/audio/search")
    public List<Audio> searchAudio(@RequestParam String query) {
        return audioService.searchAudios(query);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Audio> getAudioById(@PathVariable int id) {
        return audioService.getAudioById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addAudioDetails")
    public Audio postAudioDetails(@RequestBody Audio audio) {
        return audioService.saveAudioDetails(audio);
    }
}

