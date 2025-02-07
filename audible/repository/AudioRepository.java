//package com.example.audible.repository;
//import com.example.audible.model.Audio;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface AudioRepository extends JpaRepository<Audio,Integer>
//{
//}

package com.example.audible.repository;

import com.example.audible.model.Audio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AudioRepository extends JpaRepository<Audio, Integer> {

    // Method to search by title (case insensitive)
    List<Audio> findByTitleContainingIgnoreCase(String title);
}
