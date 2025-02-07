//package com.example.audible.Service;
//import com.example.audible.model.Audio;
//import com.example.audible.model.Audiocast;
//import com.example.audible.repository.AudioRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class AudioService {
//
//    @Autowired
//    private AudioRepository audioRepository;
//    public List<Audio> getAllAudios() {
//        return audioRepository.findAll();
//    }
//
//    public Optional<Audio> getAudioById(int id) {
//        return audioRepository.findById(id);
//    }
//
//    public Audio createAudio(Audio audio) {
//        return audioRepository.save(audio);
//    }
//
//    public Audio saveAudioDetails(Audio audio){
//        return audioRepository.save(audio);
//    }
//}
package com.example.audible.Service;

import com.example.audible.model.Audio;
import com.example.audible.repository.AudioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;

@Service
public class AudioService {

    @Autowired
    private AudioRepository audioRepository;

    public List<Audio> getAllAudios() {
        return audioRepository.findAll();
    }

//    public List<Audio> searchAudios(String query) {
//        // Search only by title (case insensitive)
//        return audioRepository.findByTitleContainingIgnoreCase(query);
//    }
public List<Audio> searchAudios(String query) {
    List<Audio> audios = audioRepository.findByTitleContainingIgnoreCase(query);

    // Optionally, you can process any additional fields here if needed
    for (Audio audio : audios) {
        // You can ensure image URL is correct or perform any additional transformations here
        audio.setImageUrl(audio.getFullImageUrl());
    }

    return audios;
}


    public Optional<Audio> getAudioById(int id) {
        return audioRepository.findById(id);
    }

    public Audio createAudio(Audio audio) {
        return audioRepository.save(audio);
    }

    public Audio saveAudioDetails(Audio audio) {
        return audioRepository.save(audio);
    }
}
